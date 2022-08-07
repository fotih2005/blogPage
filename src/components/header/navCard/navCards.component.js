import { SiteNavCards, SiteNavLink } from "../header.style";

function NavCard(props) {
  return (
    <>
      <SiteNavCards>
        <SiteNavLink to={`category/${props.category}`}>{props.category}</SiteNavLink>
      </SiteNavCards>
    </>
  );
}

export default NavCard