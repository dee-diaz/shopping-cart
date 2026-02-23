import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductGallery from './ProductGallery';

const mockData = {
  title: 'MM..Food',
  imgArr: [
    {
      type: 'primary',
      uri: 'https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
      resource_url:
        'https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
      uri150:
        'https://i.discogs.com/v6GOVjVhFCsQLUPtooQiRE95Ozc-DqyUV6xj7jZTo30/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
      width: 600,
      height: 600,
    },
    {
      type: 'secondary',
      uri: 'https://i.discogs.com/921qt_75qE-P5s4q33RyQy-VhKqEkjFNWUal8O2wXfM/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      resource_url:
        'https://i.discogs.com/921qt_75qE-P5s4q33RyQy-VhKqEkjFNWUal8O2wXfM/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      uri150:
        'https://i.discogs.com/VjS13oxUH73KORDaE_wRZPv2B6a4pD1MoRe56pg5PCA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      width: 598,
      height: 600,
    },
    {
      type: 'secondary',
      uri: 'https://i.discogs.com/921qt_75qE-P5s4q33RyQy-VhKqEkjFNWUal8O2wXfM/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      resource_url:
        'https://i.discogs.com/921qt_75qE-P5s4q33RyQy-VhKqEkjFNWUal8O2wXfM/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      uri150:
        'https://i.discogs.com/VjS13oxUH73KORDaE_wRZPv2B6a4pD1MoRe56pg5PCA/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTEx/LTc5NzguanBlZw.jpeg',
      width: 598,
      height: 600,
    },
  ],
};

describe('ProductGallery', () => {
  it('is present in the document', () => {
    render(
      <ProductGallery albumTitle={mockData.title} imgArr={mockData.imgArr} />,
    );
    const gallery = screen.getByRole('group', { name: /gallery/i });
    expect(gallery).toBeInTheDocument();
  });

  it('renders all images', () => {
    render(
      <ProductGallery albumTitle={mockData.title} imgArr={mockData.imgArr} />,
    );
    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(3);
  });

  it('inserts correct alt text', () => {
    const oneImgArr = [
      {
        type: 'primary',
        uri: 'https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
        resource_url:
          'https://i.discogs.com/hdGhbaRjPSMBPhA52lUkubOw_1m1FbN6edkbqEwy9qo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
        uri150:
          'https://i.discogs.com/v6GOVjVhFCsQLUPtooQiRE95Ozc-DqyUV6xj7jZTo30/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyMzU0/LmpwZWc.jpeg',
        width: 600,
        height: 600,
      },
    ];
    render(<ProductGallery albumTitle={mockData.title} imgArr={oneImgArr} />);
    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('alt', 'MM..Food, 1/1');
  });
});
