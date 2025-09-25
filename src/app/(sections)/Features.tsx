import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FEATURES } from "@/lib/constants";
import { Heading } from "@/components/ui/primitives/Heading";

export function Features() {
  return (
    <Section id="features">
      <Container>
        <Heading level={2} className="mb-6">Why makers choose Loomify</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <div className="flex items-center gap-3">
                <Image src={f.icon} alt="" width={20} height={20} />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-2 text-foreground/80 text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

