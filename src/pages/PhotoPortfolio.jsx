import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const formatTitle = (fileName) => {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+\s*-\s*/, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const TOPICS = [
  {
    id: "astro",
    label: "Astro",
    description: "Night sky and long exposure shots captured around the world",
  },
  {
    id: "landscape",
    label: "Landscape",
    description: "Landscape and scenic photography",
  },
  {
    id: "animal",
    label: "Animal",
    description: "Animal and wildlife photography",
  },
  {
    id: "cars",
    label: "Cars",
    description: "Automotive photography and details",
  },
  {
    id: "street",
    label: "Street",
    description: "Street photography and urban scenes",
  },
  {
    id: "aerial",
    label: "Aerial",
    description: "Drone and aerial photography",
  },
];

export const PhotoPortfolio = () => {
  const [selectedTopic, setSelectedTopic] = useState("astro");
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const currentTopic = TOPICS.find((t) => t.id === selectedTopic);

  const goNext = useCallback(() => {
    if (!slides.length) {
      return;
    }

    setActiveIndex((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const goPrev = useCallback(() => {
    if (!slides.length) {
      return;
    }

    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    let isMounted = true;

    const loadGallery = async () => {
      setIsLoading(true);
      setLoadError(null);

      try {
        const response = await fetch(`/projects/${selectedTopic}/index.json`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load gallery manifest");
        }

        const files = await response.json();
        const fileList = Array.isArray(files) ? files : [];
        const nextSlides = fileList.map((fileName, index) => ({
          id: `${index}-${fileName}`,
          src: encodeURI(`/projects/${selectedTopic}/${fileName}`),
          title: formatTitle(fileName),
          position: index + 1,
        }));

        if (isMounted) {
          setSlides(nextSlides);
          setActiveIndex(0);
        }
      } catch (error) {
        if (isMounted) {
          setLoadError("Gallery could not be loaded.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadGallery();

    return () => {
      isMounted = false;
    };
  }, [selectedTopic]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 100;

    if (Math.abs(distance) < minSwipeDistance) {
      setTouchStart(null);
      return;
    }

    if (distance > 0) {
      goNext();
    } else {
      goPrev();
    }

    setTouchStart(null);
  };

  const handleTopicChange = (topicId) => {
    setSelectedTopic(topicId);
  };

  if (isLoading) {
    return (
      <section className="portfolio-page">
        <div className="portfolio-shell">Loading photos...</div>
      </section>
    );
  }

  if (loadError) {
    return (
      <section className="portfolio-page">
        <div className="portfolio-shell">{loadError}</div>
      </section>
    );
  }

  if (!slides.length) {
    return (
      <section className="portfolio-page">
        <div className="portfolio-shell">
          <header className="portfolio-header">
            <div className="portfolio-meta">
              <div className="portfolio-kicker">Photography Portfolio</div>
              <Link className="portfolio-back" to="/">
                <ArrowLeft size={18} />
                Back to projects
              </Link>
            </div>

            <div className="portfolio-heading">
              <h1>Photo Gallery</h1>
              
              {/* Topic Selection Buttons */}
              <div className="flex gap-2 justify-center mt-6 flex-wrap">
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicChange(topic.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg transition-all duration-200",
                      selectedTopic === topic.id
                        ? "bg-primary text-white"
                        : "bg-card text-muted-foreground hover:bg-primary/10"
                    )}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>
          </header>
          <p className="text-center text-muted-foreground mt-8">
            No images found in this category yet.
          </p>
        </div>
      </section>
    );
  }

  const activeSlide = slides[activeIndex];

  return (
    <section className="portfolio-page">
      <div className="portfolio-shell">
        <header className="portfolio-header">
          <div className="portfolio-meta">
            <div className="portfolio-kicker">Photography Portfolio</div>
            <Link className="portfolio-back" to="/">
              <ArrowLeft size={18} />
              Back to projects
            </Link>
          </div>

          <div className="portfolio-heading">
            <h1>{currentTopic?.label || "Photo Gallery"}</h1>
            <p>{currentTopic?.description}</p>
            
            {/* Topic Selection Buttons */}
            <div className="flex gap-2 justify-center mt-6 flex-wrap">
              {TOPICS.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => handleTopicChange(topic.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-200",
                    selectedTopic === topic.id
                      ? "bg-primary text-white"
                      : "bg-card text-muted-foreground hover:bg-primary/10"
                  )}
                >
                  {topic.label}
                </button>
              ))}
            </div>
            
            <p className="text-muted-foreground mt-4">
              Use the arrows or thumbnails to explore.
            </p>
          </div>
        </header>

        <div className="portfolio-carousel">
          <div
            className="portfolio-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="portfolio-frame">
              <img
                key={activeSlide.id}
                className="portfolio-image"
                src={activeSlide.src}
                alt={activeSlide.title}
              />
            </div>
            <div className="portfolio-caption">
              <div>
                <span className="portfolio-title">{activeSlide.title}</span>
                <span className="portfolio-subtitle">
                  Frame {activeSlide.position} of {slides.length}
                </span>
              </div>
              <div className="portfolio-controls">
                <button
                  type="button"
                  className="portfolio-control"
                  onClick={goPrev}
                  aria-label="Previous photo"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type="button"
                  className="portfolio-control"
                  onClick={goNext}
                  aria-label="Next photo"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="portfolio-progress">
              <span
                style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="portfolio-thumbs" role="tablist">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={cn("portfolio-thumb", index === activeIndex && "is-active")}
                onClick={() => setActiveIndex(index)}
              >
                <img src={slide.src} alt={slide.title} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
