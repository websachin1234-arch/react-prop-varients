import Section from "../components/common/Section";
import Heading from "../components/common/Heading";
import Badge from "../components/common/Badge";
import Paragraph from "../components/common/Paragraph";
import Button from "../components/common/Button";



const Hub = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
    <Section>
      <Badge>
        How It Works
      </Badge>
      <Heading>
        Ready to Navigate the Next <span className="text-[#D9B8F5]">Wave?</span>
      </Heading>
    <Paragraph>
      Join a community built for technology leaders by hands-on practitioners. Get direct access to our expert insights, monthly reports, <br /> podcast, and the strategic tools we use to guide the world’s leading companies.
    </Paragraph>
    <Button to="/podcast" variant="primary">
    Join the Community
    </Button>
  
    </Section>
    </div>
  )
}

export default Hub
