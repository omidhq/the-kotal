// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Author from './Author';

describe('Author', () => {
  const props = {
    author: {
      name: 'test',
      photo: '/omid-illustrated.jpg',
      bio: 'test',
      altText: "دست نوشته ها و یادداشت‌های پراکنده امید حق‌بین - Omid Haqbin's notes"
    },
    isIndex: false
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Author {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
