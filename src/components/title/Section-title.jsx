import { StyledSection } from "./Section-title.styled";

export function Section({title, children}) {
    return (
        <StyledSection>
       < h1>{title}</h1>
       {children}
       </StyledSection>
    )
}