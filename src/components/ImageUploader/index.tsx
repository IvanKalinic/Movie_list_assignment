import { Upload } from "../../assets/svg";
import { Icon, Image, UploadBoxWrapper } from "../styles";
import { Box, Flex, Text } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useMovies } from "../../context/MoviesContext";

const ImageUploader = () => {
  const { image, setImage } = useMovies();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImage(String(e.target.result));
          // setImage(imageUrl);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    setImage("");
  }, []);

  return (
    <UploadBoxWrapper image={image}>
      {!image ? (
        <>
          <label htmlFor="input" style={{ cursor: "pointer" }}>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Upload />
              <Text mt="1rem">Drop an image here</Text>
            </Flex>
          </label>
          <input
            id="input"
            style={{ display: "none" }}
            type="file"
            accept=".jpg,.jpeg,.gif,.png,.jfif"
            onChange={handleImageChange}
          />
        </>
      ) : (
        <Box width="100%" height="100%" style={{ position: "relative" }}>
          <Icon onClick={() => setImage("")}>
            <DeleteIcon
              width="1.5rem"
              height="1.5rem"
              css={{ ":hover": { color: "#8c3103" } }}
            />
          </Icon>
          <Image src={image} />
        </Box>
      )}
    </UploadBoxWrapper>
  );
};

export default ImageUploader;
