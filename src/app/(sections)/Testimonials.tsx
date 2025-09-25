import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TESTIMONIALS } from "@/lib/constants";
import { Heading } from "@/components/ui/primitives/Heading";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <Heading level={2} className="mb-8">Loved by makers</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <blockquote className="text-sm text-foreground/90">“{t.quote}”</blockquote>
              <div className="mt-3 text-xs text-foreground/60">— {t.name}</div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

