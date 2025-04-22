import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    quantityInStock: "",
    color: "",
    warrantyPeriod: "",
    availabilityStatus: "",
  });
  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
      quantityInStock: "",
      color: "",
      warrantyPeriod: "",
      availabilityStatus: "",
    });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Input
              placeholder="Quantity in Stock"
              name="quantityInStock"
              type="number"
              value={newProduct.quantityInStock}
              onChange={(e) => setNewProduct({ ...newProduct, quantityInStock: e.target.value })}
            />
            <Input
              placeholder="Color"
              name="color"
              value={newProduct.color}
              onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
            />
            <Input
              placeholder="Warranty Period"
              name="warrantyPeriod"
              value={newProduct.warrantyPeriod}
              onChange={(e) => setNewProduct({ ...newProduct, warrantyPeriod: e.target.value })}
            />
            <Input
              placeholder="Availability Status"
              name="availabilityStatus"
              value={newProduct.availabilityStatus}
              onChange={(e) => setNewProduct({ ...newProduct, availabilityStatus: e.target.value })}
            />

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product 
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;