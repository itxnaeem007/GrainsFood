import { TestimonialsDATA } from "./TestimonialsData";
import { Row, Text } from "@/components/elements";
import { Responsive } from "@/components/elements/Responsive";
import { TestimonialsElement } from "./components";

export const Testimonials = () => {
  return (
    <Responsive direction={"column"}>
      <Text
        css={{ textAlign: "center", mt: "20px" }}
        variant={"p_2xl"}
        color={"blue"}
        weight={"bold"}
      >
        Testimonials

      </Text>
      <Text
        css={{ textAlign: "center", textTransform: "uppercase" }}
        variant={"p_lg"}
        color={"gray3"}
        weight={"bold"}
      >
        CUSTOMER REFERENCES
      </Text>
      <Row css={{ width: "100%" , mt : '30px' }}>
        {TestimonialsDATA.map((feature, index) => (
          <TestimonialsElement
            description={feature.description}
            index={index}
            title={feature.title}
            founder={feature.founder}
            key={index}
          />
        ))}
      </Row>
    </Responsive>
  );
};
