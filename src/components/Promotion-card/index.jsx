import { Container } from "./style";

export function PromotionalCard({ img_png, title, promotion }) {
  return (
    <Container>
      <img src={ img_png } alt="" />
      <div>
        <h2> { promotion } OFF </h2>
      </div>
    </Container>
  )
}