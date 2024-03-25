import BorderLine, { BorderLineUp } from "../home/shop/BorderLine";
import DeliciousCombo from "./renew-promise/DeliciousCombo";

import RenewPromiseComponent from "./renew-promise/RenewPromiseComponent";

export default function RenewPromise() {
  return (
    <div>
      <BorderLineUp />
      <RenewPromiseComponent />
      <BorderLine />
      <DeliciousCombo />
    </div>
  );
}
