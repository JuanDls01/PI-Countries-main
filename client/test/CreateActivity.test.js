import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import CreateActivity, {validate}  from '../src/components/CreateActivity/CreateActivity.jsx';

describe('<CreateActivity /> Mounted', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Form />);
  });
  it('El form debe tener un label que diga: "Nombre: "', () => {
      const { container } = render(<CreateActivity />)
      const element = container.querySelectorAll('label')[0]
      expect(element.innerHTML).toBe('Nombre: ');
  });

  it('El form debe tener un label que diga: "Descripción: "', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('label')[1]
    expect(element.innerHTML).toBe('Descripción: ');
  });

  it('El form debe tener un label que diga: "Dificultad: "', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('label')[2]
    expect(element.innerHTML).toBe('Dificultad: ');
  });

  it('El form debe tener un label que diga: "Duración (hs.): "', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('label')[3]
    expect(element.innerHTML).toBe('Duración (hs.): ');
  });

  it('El form debe tener un label que diga: "Temporada ideal para realizarla: "', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('label')[4]
    expect(element.innerHTML).toBe('Temporada ideal para realizarla: ');
  });

  it('El form debe tener un label que diga: "En que paises se realiza la actividad: "', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('label')[5]
    expect(element.innerHTML).toBe('En que paises se realiza la actividad: ');
  });

  it('El form debe tener un input con name "name" y type "text"', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('name');
  });

  it('El form debe tener un input con name "description" y type "text"', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('text');
    expect(element.name).toBe('description');
  });

  it('El form debe tener un input con name "difficulty" y type "number"', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('input')[2]
    expect(element.type).toBe('number');
    expect(element.name).toBe('difficulty');
  });

  it('El form debe tener un input con name "duration" y type "number"', () => {
    const { container } = render(<CreateActivity />)
    const element = container.querySelectorAll('input')[3]
    expect(element.type).toBe('number');
    expect(element.name).toBe('duration');
  });
});