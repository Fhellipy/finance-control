import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@lib/stitches";

FontAwesomeIcon.toString = () => "FontAwesomeIcon";
const Icon = styled(FontAwesomeIcon, {
  color: "$gray",
  fontSize: "$xl",
});

export default Icon;
