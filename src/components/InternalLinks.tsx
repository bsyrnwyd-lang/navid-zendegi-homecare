import { memo } from 'react';
import { Link } from 'react-router-dom';

interface InternalLink {
  to: string;
  label: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  className?: string;
}

const InternalLinks = memo(({ 
  title = "خدمات مرتبط", 
  links, 
  className = "" 
}: InternalLinksProps) => {
  if (!links || links.length === 0) return null;

  return (
    <aside className={`bg-muted/30 rounded-lg p-6 ${className}`} aria-labelledby="related-links-title">
      <h3 id="related-links-title" className="text-lg font-semibold mb-4">{title}</h3>
      <nav aria-label="خدمات و مقالات مرتبط">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.to}
                className="text-primary hover:underline text-sm transition-colors block py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

InternalLinks.displayName = 'InternalLinks';

// Pre-defined link sets for common scenarios
export const cardioLinks: InternalLink[] = [
  { to: "/cardiology", label: "متخصص قلب در منزل" },
  { to: "/services/holter", label: "هولتر قلب در منزل" },
  { to: "/services/echo-ecg", label: "اکو و نوار قلب در منزل" },
  { to: "/articles/heart-attack-symptoms", label: "علائم سکته قلبی" },
  { to: "/articles/high-blood-pressure", label: "فشار خون بالا" },
  { to: "/articles/heart-palpitations", label: "تپش قلب" },
];

export const generalLinks: InternalLink[] = [
  { to: "/general-doctor", label: "پزشک عمومی در منزل" },
  { to: "/services/internal", label: "متخصص داخلی در منزل" },
  { to: "/services/laboratory", label: "آزمایش خون در منزل" },
  { to: "/services/nursing", label: "پرستاری در منزل" },
];

export const neurologyLinks: InternalLink[] = [
  { to: "/services/neurology", label: "متخصص مغز و اعصاب در منزل" },
  { to: "/articles/stroke-symptoms", label: "علائم سکته مغزی" },
  { to: "/articles/migraine", label: "میگرن" },
  { to: "/articles/headache", label: "سردرد" },
  { to: "/articles/dizziness", label: "سرگیجه" },
];

export const medicationLinks: InternalLink[] = [
  { to: "/articles/atorvastatin", label: "آتورواستاتین" },
  { to: "/articles/warfarin", label: "وارفارین" },
  { to: "/articles/aspirin", label: "آسپرین" },
  { to: "/articles/metformin", label: "متفورمین" },
  { to: "/articles/bisoprolol", label: "بیزوپرولول" },
];

export const diagnosticLinks: InternalLink[] = [
  { to: "/services/echo-ecg", label: "اکو و نوار قلب" },
  { to: "/services/holter", label: "هولتر مانیتورینگ" },
  { to: "/services/laboratory", label: "آزمایشگاه در منزل" },
  { to: "/services/radiology", label: "سونوگرافی در منزل" },
];

export default InternalLinks;
