import { BUSINESS, CONTENT_UPDATED, formatDisplayDate } from "@/seo/site";

/** Visible authorship + freshness line ("By the TechOutlet repair team · Last updated …"). */
const PageByline = ({ className = "" }: { className?: string }) => (
  <p className={`byline text-sm text-muted-foreground ${className}`}>
    By the <span className="author">{BUSINESS.name} repair team</span> at {BUSINESS.address.streetAddress},
    London · Last updated{" "}
    <time dateTime={CONTENT_UPDATED}>{formatDisplayDate(CONTENT_UPDATED)}</time>
  </p>
);

export default PageByline;
