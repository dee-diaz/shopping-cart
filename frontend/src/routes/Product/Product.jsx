import styles from './Product.module.css';
import { Link } from 'react-router';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import Tracklist from '../../components/Tracklist/Tracklist';
import ProductGallery from '../../components/ProductGallery/ProductGallery';

const mockTracklist = [
  { position: 'A1', title: 'Beef Rapp', duration: '4:39' },
  { position: 'A2', title: 'Hoe Cakes', duration: '3:54' },
  { position: 'A3', title: 'Potholderz', duration: '3:20' },
  { position: 'B1', title: 'One Beer', duration: '4:18' },
  { position: 'B2', title: 'Deep Fried Frenz', duration: '4:56' },
  { position: 'B3', title: 'Poo-Putt Platter', duration: '1:13' },
  { position: 'B4', title: 'Fillet-O-Rapper', duration: '1:53' },
  { position: 'B5', title: 'Gumbo', duration: '0:50' },
  { position: 'C1', title: 'Fig Leaf Bi-Carbonate', duration: '3:19' },
  { position: 'C2', title: 'Kon Karne', duration: '2:51' },
  { position: 'C3', title: 'Guinnessez', duration: '4:41' },
  { position: 'D1', title: 'Kon Queso', duration: '4:00' },
  { position: 'D2', title: 'Rapp Snitch Knishes', duration: '2:52' },
  { position: 'D3', title: 'Vomitspit', duration: '2:48' },
  { position: 'D4', title: 'Kookies', duration: '4:10' },
];

const mockImgArr = [
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
    uri: 'https://i.discogs.com/ztYMVwvKLpc_Lor-KyNVR-TPhSDoQKbhRs9qX0B_HNQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyNDA3/LmpwZWc.jpeg',
    resource_url:
      'https://i.discogs.com/ztYMVwvKLpc_Lor-KyNVR-TPhSDoQKbhRs9qX0B_HNQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyNDA3/LmpwZWc.jpeg',
    uri150:
      'https://i.discogs.com/aT_pbRhkyQjGH_O9imM4FthyUBN3lKkchYl5TELYe3k/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMTg1OTcyNDA3/LmpwZWc.jpeg',
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
    uri: 'https://i.discogs.com/37Uc5hPUbgjeu0XJf1Ua10jlQObVi0hHMuy5Ze0OtuE/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTE5/LTc5NzAuanBlZw.jpeg',
    resource_url:
      'https://i.discogs.com/37Uc5hPUbgjeu0XJf1Ua10jlQObVi0hHMuy5Ze0OtuE/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTE5/LTc5NzAuanBlZw.jpeg',
    uri150:
      'https://i.discogs.com/fKK6SeflWJdv0pcx_3fo6vdpTzXnF1As_GCFyvRTniQ/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTE5/LTc5NzAuanBlZw.jpeg',
    width: 597,
    height: 600,
  },
  {
    type: 'secondary',
    uri: 'https://i.discogs.com/6EjK-9hO2vyvuFMtZGTas93DJPqBmcD2vNHPVNLXDwI/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTQ3/LTMwMTguanBlZw.jpeg',
    resource_url:
      'https://i.discogs.com/6EjK-9hO2vyvuFMtZGTas93DJPqBmcD2vNHPVNLXDwI/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTQ3/LTMwMTguanBlZw.jpeg',
    uri150:
      'https://i.discogs.com/xaV2J7lmeQvSTBK5mc-lydLzlS8eBfRj5pHPkaCZ_kM/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTQ3/LTMwMTguanBlZw.jpeg',
    width: 600,
    height: 598,
  },
  {
    type: 'secondary',
    uri: 'https://i.discogs.com/qYiMdUTdf0HxEG-H2VeK-HRrKc8sT4tbAR3jho0Ni10/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTU2/LTcyNDIuanBlZw.jpeg',
    resource_url:
      'https://i.discogs.com/qYiMdUTdf0HxEG-H2VeK-HRrKc8sT4tbAR3jho0Ni10/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTU2/LTcyNDIuanBlZw.jpeg',
    uri150:
      'https://i.discogs.com/T9KbbxZuHTPvy3WnoVn4KFnT1alewqpc5uK7vVWXt6g/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1NjU5/Mi0xMzQ1ODQ2OTU2/LTcyNDIuanBlZw.jpeg',
    width: 597,
    height: 600,
  },
];

export default function ProductPage() {
  let imgArr;
  mockImgArr.length > 4
    ? (imgArr = mockImgArr.slice(0, 4))
    : (imgArr = mockImgArr);

  return (
    <div className={styles.productPage}>
      <div className="container">
        <Link className={styles.backBtn} to="/">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9422 15.8078C13.0003 15.8659 13.0463 15.9348 13.0777 16.0107C13.1092 16.0866 13.1254 16.1679 13.1254 16.25C13.1254 16.3321 13.1092 16.4134 13.0777 16.4893C13.0463 16.5652 13.0003 16.6341 12.9422 16.6922C12.8841 16.7503 12.8152 16.7963 12.7393 16.8277C12.6634 16.8592 12.5821 16.8753 12.5 16.8753C12.4179 16.8753 12.3366 16.8592 12.2607 16.8277C12.1848 16.7963 12.1159 16.7503 12.0578 16.6922L5.80782 10.4422C5.74971 10.3841 5.70361 10.3152 5.67215 10.2393C5.6407 10.1635 5.62451 10.0821 5.62451 10C5.62451 9.91786 5.6407 9.83653 5.67215 9.76066C5.70361 9.68478 5.74971 9.61585 5.80782 9.55781L12.0578 3.30781C12.1751 3.19053 12.3342 3.12465 12.5 3.12465C12.6659 3.12465 12.8249 3.19053 12.9422 3.30781C13.0595 3.42508 13.1254 3.58414 13.1254 3.75C13.1254 3.91585 13.0595 4.07491 12.9422 4.19218L7.1336 10L12.9422 15.8078Z"
              fill="black"
            />
          </svg>
          Back to catalog
        </Link>

        <article className={styles.product}>
          <ProductGallery albumTitle="MM.Food" imgArr={imgArr} />
          <ProductDetails />
          <Tracklist tracklist={mockTracklist} />
        </article>
      </div>
    </div>
  );
}
