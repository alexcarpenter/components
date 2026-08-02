import { createRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "./index";
import type { ButtonState } from "./index";

const styles = stylex.create({
  rendered: {
    display: "inline-flex",
  },
});

describe("Button", () => {
  it("renders an accessible native button", () => {
    render(<Button>Save changes</Button>);

    expect(screen.getByRole("button", { name: "Save changes" })).toHaveAttribute("type", "button");
  });

  it("handles clicks and suppresses them when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { rerender } = render(<Button onClick={onClick}>Submit</Button>);

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);

    rerender(
      <Button disabled onClick={onClick}>
        Submit
      </Button>,
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("forwards state-aware sx classes through the render prop", () => {
    const sx = vi.fn((_state: ButtonState) => styles.rendered);

    render(
      <Button nativeButton={false} render={<span />} sx={sx}>
        Save
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Save" })).toHaveClass(
      stylex.props(styles.rendered).className as string,
    );
    expect(sx).toHaveBeenCalledWith({
      color: "primary",
      disabled: false,
      fullWidth: false,
      shape: "default",
      size: "md",
      variant: "filled",
    });
  });

  it("forwards native props and refs", () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <Button ref={ref} name="intent" value="save">
        Save
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("name", "intent");
    expect(button).toHaveAttribute("value", "save");
    expect(ref.current).toBe(button);
  });
});
