import styled from '@emotion/styled'

import Flex from '@shared/Flex'
import Text from '@shared/Text'

function Rooms() {
  return (
    <Container>
      <Header justify="space-between" align="center">
        <Text bold={true} typography="t4">
          객실정보
        </Text>
        <Text typography="t6" color="grey400">
          1박, 세금 포함
        </Text>
      </Header>
    </Container>
  )
}

const Container = styled.div`
  margin: 40px 0;
`

const Header = styled(Flex)`
  padding: 0 24px;
  margin-bottom: 20px;
`

export default Rooms
