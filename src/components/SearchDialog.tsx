import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Stethoscope, FileText, Home } from "lucide-react";
import { allSearchData, SearchItem } from "@/data/searchData";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// تابع نرمال‌سازی متن فارسی
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/ي/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/ئ/g, 'ی')
    .replace(/ؤ/g, 'و')
    .replace(/إ|أ/g, 'ا');
};

// تابع fuzzy search با پشتیبانی از تایپ‌های نادرست
const fuzzySearch = (items: SearchItem[], query: string): SearchItem[] => {
  if (!query || query.length < 2) return [];

  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(' ');

  const scored = items.map(item => {
    const normalizedTitle = normalizeText(item.title);
    const normalizedDesc = normalizeText(item.description || '');
    const normalizedKeywords = item.keywords.map(k => normalizeText(k));

    let score = 0;

    // امتیاز برای تطابق کامل در عنوان
    if (normalizedTitle.includes(normalizedQuery)) {
      score += 100;
    }

    // امتیاز برای تطابق در توضیحات
    if (normalizedDesc.includes(normalizedQuery)) {
      score += 50;
    }

    // امتیاز برای تطابق در کلمات کلیدی
    normalizedKeywords.forEach(keyword => {
      if (keyword.includes(normalizedQuery)) {
        score += 80;
      }
    });

    // امتیاز برای تطابق هر کلمه جداگانه
    queryWords.forEach(word => {
      if (word.length < 2) return;

      if (normalizedTitle.includes(word)) score += 30;
      if (normalizedDesc.includes(word)) score += 15;
      
      normalizedKeywords.forEach(keyword => {
        if (keyword.includes(word)) score += 25;
      });
    });

    // امتیاز برای تطابق fuzzy (حروف مشابه)
    const titleChars = normalizedTitle.split('');
    const queryChars = normalizedQuery.split('');
    let matchCount = 0;
    
    queryChars.forEach(char => {
      if (titleChars.includes(char)) {
        matchCount++;
      }
    });

    if (matchCount >= queryChars.length * 0.7) {
      score += 20;
    }

    return { item, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map(s => s.item);
};

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return fuzzySearch(allSearchData, query);
  }, [query]);

  const services = results.filter(r => r.type === 'service');
  const articles = results.filter(r => r.type === 'article');
  const pages = results.filter(r => r.type === 'page');

  const handleSelect = (url: string) => {
    navigate(url);
    onOpenChange(false);
    setQuery("");
  };

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Stethoscope className="ml-2 h-4 w-4 text-primary" />;
      case 'article':
        return <FileText className="ml-2 h-4 w-4 text-muted-foreground" />;
      case 'page':
        return <Home className="ml-2 h-4 w-4 text-accent-foreground" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command shouldFilter={false} className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput 
            placeholder="جستجو در خدمات، مقالات و صفحات..." 
            value={query}
            onValueChange={setQuery}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <CommandList className="max-h-[400px]">
        <CommandEmpty>
          <div className="py-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">نتیجه‌ای یافت نشد</p>
            <p className="text-xs text-muted-foreground">
              برای کمک و راهنمایی با ما تماس بگیرید:{" "}
              <a 
                href="tel:09386117912" 
                className="text-primary font-semibold hover:underline"
              >
                09386117912
              </a>
            </p>
          </div>
        </CommandEmpty>

        {pages.length > 0 && (
          <CommandGroup heading="صفحات">
            {pages.map((item) => (
              <CommandItem
                key={item.url}
                onSelect={() => handleSelect(item.url)}
                className="cursor-pointer"
              >
                {getIcon(item.type)}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {services.length > 0 && (
          <CommandGroup heading="خدمات پزشکی">
            {services.map((item) => (
              <CommandItem
                key={item.url}
                onSelect={() => handleSelect(item.url)}
                className="cursor-pointer"
              >
                {getIcon(item.type)}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}

        {articles.length > 0 && (
          <CommandGroup heading="مقالات پزشکی">
            {articles.map((item) => (
              <CommandItem
                key={item.url}
                onSelect={() => handleSelect(item.url)}
                className="cursor-pointer"
              >
                {getIcon(item.type)}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {item.description}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
