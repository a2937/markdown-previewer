import { cleanup, fireEvent, screen, queryByAttribute } from "@testing-library/react";

import { render } from "./testUtils";

import Previewer from '../Previewer';

const getById = queryByAttribute.bind(null, 'id');


afterEach(cleanup);


test('Previewer renders the title', () => {
  render(<Previewer />);
  const titleElement = screen.getByText(/Markdown previewer/i);
  expect(titleElement).toBeInTheDocument();
});

test('There is an textarea element with corresponding id="editor"', () => {
  const dom = render(<Previewer />);
  const editor = dom.container.querySelector("#editor");
  expect(editor).toBeInTheDocument();
});

test('There is an textarea element with corresponding id="preview"', () => {
  const dom = render(<Previewer />);
  const editor = dom.container.querySelector("#preview");
  expect(editor).toBeInTheDocument();
});
