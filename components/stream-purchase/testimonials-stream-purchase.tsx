import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Example testimonials data
const testimonials = [
  {
    text: "This product has revolutionized the way we work. It's incredibly efficient and easy to use.",
    name: "John Doe",
    position: "CEO",
    avatar: "/avatars/john.jpg",
    companyLogo: "/logos/company1.png",
  },
  {
    text: "I love the simplicity and functionality. It’s a real game-changer for our team.",
    name: "Jane Smith",
    position: "CTO",
    avatar: "/avatars/jane.jpg",
    companyLogo: "/logos/company2.png",
  },
  {
    text: "Amazing customer support and robust features. We've never been more satisfied.",
    name: "Emily Clark",
    position: "Product Manager",
    avatar: "/avatars/emily.jpg",
    companyLogo: "/logos/company3.png",
  },
  {
    text: "This solution helped streamline our processes and improved team productivity.",
    name: "Michael Brown",
    position: "Lead Developer",
    avatar: "/avatars/michael.jpg",
    companyLogo: "/logos/company4.png",
  },
  {
    text: "A must-have tool for any modern business. Great features and a fantastic user experience.",
    name: "Sarah Wilson",
    position: "Marketing Director",
    avatar: "/avatars/sarah.jpg",
    companyLogo: "/logos/company5.png",
  },
  {
    text: "We’ve seen a significant improvement in our workflow since adopting this tool.",
    name: "David Lee",
    position: "Operations Manager",
    avatar: "/avatars/david.jpg",
    companyLogo: "/logos/company6.png",
  },
];

const TestimonialsStreamPurchase = () => {
  return (
    <section className="py-12  text-gray-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Testimonios</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <Card
            key={idx}
            className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-lg p-6 space-y-4 shadow-md"
          >
            <CardHeader className="flex items-center space-x-4">
              {/* <img
                src={testimonial.avatar}
                alt={`${testimonial.name} avatar`}
                className="w-12 h-12 rounded-full border-2 border-gray-700"
              /> */}
              <div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </div>
              {/* <img
                src={testimonial.companyLogo}
                alt={`${testimonial.name}'s company logo`}
                className="ml-auto w-10 h-10"
              /> */}
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-300">{testimonial.text}</p>
            </CardContent>

            <CardFooter />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsStreamPurchase;
