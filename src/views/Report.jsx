import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Badge from "../components/common/Badge";
import Paragraph from "../components/common/Paragraph";
import Button from "../components/common/Button";
import PropButton from "../components/common/PropButton";

const Hub = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
    <Section>
      <Badge>
        Monthly Reports
      </Badge>
      <Heading>
        AI Native Insights,   <span className="text-[#D9B8F5]">Delivered</span> <br /> Monthly. 
      </Heading>
    <Paragraph>
      Get the distilled insights, strategic frameworks, and real-world case studies our experts use to <br /> guide the world's leading companies. Straight to your inbox.
    </Paragraph>
   <div className="flex items-center w-full justify-center gap-4">
      <Button to="/" variant="secondary">
    Join the Community
    </Button>
      <PropButton>
     Explore Our Book
    </PropButton>
    </div>
    </Section>
    </div>
  )
}

export default Hub
