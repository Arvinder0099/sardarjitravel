export default function Hero({
  title,
  subtitle,
  imageUrl,
  alt,
  imageHeightClass,
  imageClassName,
  showText = true,
}: {
  title: string;
  subtitle?: string;
  imageUrl: string;
  alt?: string;
  imageHeightClass?: string;
  imageClassName?: string;
  showText?: boolean;
}) {
  return (
    <section className="relative">
      <div className={`relative overflow-hidden ${imageHeightClass ?? "h-[70vh] md:h-[78vh]"} border-b border-slate-200 bg-gradient-to-br from-blue-50 to-slate-100`}>
        {/* background fill (blurred cover) to avoid empty borders */}
        <img
          src={encodeURI(imageUrl)}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center blur-sm scale-105"
          aria-hidden="true"
          loading="eager"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* main hero image (uncropped) */}
        <img
          src={encodeURI(imageUrl)}
          alt={alt ?? title}
          className={`absolute inset-0 h-full w-full ${imageClassName ?? "object-contain object-center"}`}
          loading="eager"
          decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        {/* removed dark overlay and on-image text to ensure no text overlays on images */}
      </div>
      {/* render title/subtitle BELOW the image instead of over it */}
      {showText && (
        <div className="px-4 md:px-6 py-8 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl mx-auto text-slate-700">
              {subtitle}
            </p>
          ) : null}
        </div>
      )}
    </section>
  );
}
