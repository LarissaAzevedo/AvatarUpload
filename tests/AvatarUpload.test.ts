import { render } from "@testing-library/react";

import { AvatarUpload } from "../components/AvatarUpload";

import { AvatarUploadTypes } from "../types";

describe("<AvatarUpload />", () => {
  it("should be render the component ", () => {
    render(<AvatarUpload />);
  });
});
