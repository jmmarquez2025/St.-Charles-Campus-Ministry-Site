import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ctaSchema = z.object({
  label: z.string(),
  href: z.string()
});

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  source: z.string().optional()
});

const site = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/site" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sourceUrl: z.url(),
    nav: z.array(ctaSchema),
    hero: z.object({
      brand: z.string(),
      heading: z.string(),
      body: z.string(),
      badge: imageSchema,
      logo: imageSchema,
      utilityLinks: z.array(ctaSchema),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema,
      image: imageSchema
    }),
    glance: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      image: imageSchema,
      stats: z.array(
        z.object({
          value: z.string(),
          label: z.string()
        })
      )
    }),
    quote: z.object({
      text: z.string(),
      attribution: z.string()
    }),
    prayer: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      note: z.string(),
      image: imageSchema,
      schedule: z.array(
        z.object({
          title: z.string(),
          detail: z.string(),
          meta: z.string()
        })
      )
    }),
    retreats: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      retreatTitle: z.string(),
      retreatBody: z.string(),
      serviceTitle: z.string(),
      serviceBody: z.string(),
      image: imageSchema,
      serviceFacts: z.array(
        z.object({
          label: z.string(),
          detail: z.string()
        })
      )
    }),
    chapel: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      images: z.array(imageSchema),
      highlights: z.array(
        z.object({
          title: z.string(),
          body: z.string()
        })
      )
    }),
    campus: z.object({
      id: z.string(),
      eyebrow: z.string(),
      heading: z.string(),
      body: z.string(),
      images: z.array(imageSchema),
      moments: z.array(
        z.object({
          title: z.string(),
          body: z.string()
        })
      )
    }),
    resources: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          body: z.string(),
          action: ctaSchema
        })
      ),
      image: imageSchema
    }),
    happening: z.object({
      heading: z.string(),
      body: z.string(),
      items: z.array(
        z.object({
          date: z.string(),
          title: z.string(),
          body: z.string(),
          href: z.string()
        })
      )
    }),
    discover: z.object({
      heading: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          image: imageSchema,
          href: z.string()
        })
      )
    }),
    contact: z.object({
      id: z.string(),
      heading: z.string(),
      body: z.string(),
      primaryCta: ctaSchema,
      secondaryCta: ctaSchema,
      chaplainName: z.string(),
      chaplainEmail: z.email(),
      schoolName: z.string(),
      address: z.string()
    })
  })
});

export const collections = { site };
