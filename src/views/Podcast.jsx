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
        The Community
      </Badge>
      <Heading>
        Stay in Tune With   <span className="text-[#D9B8F5]">the</span> <br /> Next Wave
      </Heading>
    <Paragraph>
      The conversation doesn't end when the episode does. Join the Waves of Innovation community to get our <br /> monthly report, access our strategic frameworks, and connect with other technology leaders.    </Paragraph>
    <div className="flex items-center w-full justify-center gap-4">
      <Button to="/report" variant="secondary">
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
