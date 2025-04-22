import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useColorModeValue } from "@chakra-ui/react";

const ProductDetail = () => {
  const { pid } = useParams();
  const { products, fetchProducts } = useProductStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts(); // Ensure products are fetched when the component mounts or pid changes
    console.log("Products from store:", products); // Debug log
    const foundProduct = products.find((p) => p._id === pid);
    console.log("Found product for pid", pid, ":", foundProduct); // Debug log
    setProduct(foundProduct);
  }, [pid, products, fetchProducts]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8} align="start">
        <Heading as={"h1"} size={"2xl"}>{product.name}</Heading>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4} align="start">
            <Text><strong>Price:</strong> {product.price}</Text>
            <Text><strong>Image URL:</strong> {product.image}</Text>
            <Text><strong>Quantity in Stock:</strong> {product.quantityInStock}</Text>
            <Text><strong>Color:</strong> {product.color}</Text>
            <Text><strong>Warranty Period:</strong> {product.warrantyPeriod}</Text>
            <Text><strong>Availability Status:</strong> {product.availabilityStatus}</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default ProductDetail;