import Accordion from "../components/Accordion.js";

const AccordionPage = () => {
  const arrayForAccordion = [
    {
      "id": 1,
      "label": "Introduction",
      "content": "Welcome to the Introduction section. Here, we provide an overview of what this accordion is all about. You can include as much text as you need, add images, or even embed videos. The purpose is to give users a clear and concise understanding of the content that follows in the subsequent sections."
    },
    {
      "id": 2,
      "label": "History",
      "content": "In this section, we delve into the history. Learn about the origins, significant events, and the evolution over time. History helps us understand the present and shape the future, providing context and perspective."
    },
    {
      "id": 3,
      "label": "Our Mission",
      "content": "Our mission is central to our identity. In this section, we articulate our goals, values, and the impact we aim to make. We believe in transparency and commitment, and we strive to make a positive difference in everything we do."
    },
    {
      "id": 4,
      "label": "Services",
      "content": "Explore our range of services in this section. We offer a variety of solutions tailored to meet your needs. Whether you're looking for product information, customer support, or expert advice, we've got you covered."
    },
    {
      "id": 5,
      "label": "Testimonials",
      "content": "Don't just take our word for it - hear what our customers have to say! In this section, we've compiled testimonials from clients who have benefited from our services. Their experiences highlight the value and quality we bring."
    },
    {
      "id": 6,
      "label": "Contact Us",
      "content": "Have questions? Need assistance? Reach out to us! In the Contact Us section, you'll find all the information you need to get in touch. We're here to my mama told me one day Im be a king"
    }
  ]

  return (
    <Accordion data={arrayForAccordion} />
  );
}

export default AccordionPage;
