import { shouldBehaveLikeCreate2 } from "./create2.test";
import { shouldBehaveLikeSalts } from "./salts.test";

describe("PRBProxy.Js", function () {
  describe("create2", function () {
    shouldBehaveLikeCreate2();
  });

  describe("salts", function () {
    shouldBehaveLikeSalts();
  });
});
