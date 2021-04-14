import { Heading, HeroSection, TextWrapper, Wrapper, Text, SearchInput, Form, InputWrapper, SearchIcon } from "./style"
import IconSearch from "../../assets/icons/loupe.svg"

const Hero = () => {
    return (
        <HeroSection>
            <Wrapper>
                <TextWrapper>
                    <Heading>Welcome.</Heading>
                    <Text>Millions of movies, TV shows and people to discover. Explore now.</Text>
                </TextWrapper>
                <Form>
                    <InputWrapper>
                        <SearchIcon src={IconSearch} />
                        <SearchInput placeholder="Search For Movies" />
                    </InputWrapper>
                </Form>
            </Wrapper>
        </HeroSection>
    )
}

export default Hero