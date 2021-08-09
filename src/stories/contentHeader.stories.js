import React from "react";
import ContentHeader from "../components/headerContent";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Content Details Page/Content Header",
  component: ContentHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ContentHeader movie={SampleMovie} mediaType={'movie'} />;

Basic.storyName = "Default";
