import Container from '../components/container'
import AlbumsFilter from '../contexts/albums/components/albums-filter'
import PhotoList from '../contexts/photos/components/photos-list'

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: '123', title: 'Album 1' },
          { id: '456', title: 'Album 2' },
          { id: '789', title: 'Album 3' },
        ]}
        className="mb-9"
      />
      <PhotoList
        photos={[
          {
            id: '123',
            title: 'Hello, World!',
            imageId: 'portrait-tower.png',
            albums: [
              { id: '123', title: 'Album 1' },
              { id: '456', title: 'Album 2' },
              { id: '789', title: 'Album 3' },
            ],
          },
        ]}
      />
    </Container>
  )
}
