import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../src/button";

describe("Button", () => {
  it("renders an accessible native button", () => {
    render(<Button>Save changes</Button>);

    expect(
      screen.getByRole("button", { name: "Save changes" }),
    ).toHaveAttribute("type", "button");
  });

  it("reflects default visual props as data attributes", () => {
    render(<Button>Default</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-size", "md");
    expect(button).toHaveAttribute("data-variant", "filled");
    expect(button).toHaveAttribute("data-color", "primary");
    expect(button).toHaveAttribute("data-shape", "default");
  });

  it("reflects overridden visual props without leaking native attributes", () => {
    render(
      <Button size="lg" variant="outline" color="negative" shape="circle">
        Delete
      </Button>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-size", "lg");
    expect(button).toHaveAttribute("data-variant", "outline");
    expect(button).toHaveAttribute("data-color", "negative");
    expect(button).toHaveAttribute("data-shape", "circle");
    expect(button).not.toHaveAttribute("size");
    expect(button).not.toHaveAttribute("variant");
    expect(button).not.toHaveAttribute("color");
    expect(button).not.toHaveAttribute("shape");
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

  it("merges consumer string and state callback class names", () => {
    const { rerender } = render(<Button className="consumer">Styled</Button>);
    expect(screen.getByRole("button")).toHaveClass("consumer");

    rerender(
      <Button
        disabled
        className={(state) => (state.disabled ? "is-disabled" : "is-enabled")}
      >
        Styled
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("is-disabled");
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
