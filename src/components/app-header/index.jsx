import { useScrollPosition } from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'
import classNames from 'classnames'
import React, {
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper, SearchAreaPlaceholder } from './style'

const AppHeader = memo((props) => {
  const [isSearch, setIsSearch] = useState(true)
  const [isAlpha, setIsAlpha] = useState(true)

  /** redux中获取数据 */
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  )
  const { isFixed, isHome } = headerConfig

  useLayoutEffect(() => {
    setIsAlpha(isHome)
    setIsSearch(isHome)
  }, [isHome])

  /** 其他hooks的逻辑 */
  const { scrollY } = useScrollPosition()
  if (isHome && scrollY === 0 && !isSearch) {
    setIsAlpha(true)
    setIsSearch(true)
  }
  if (isHome && isAlpha && scrollY > 0 && isSearch) {
    setIsAlpha(false)
    setIsSearch(false)
  }

  const prevY = useRef()
  useEffect(() => {
    prevY.current = 0
  }, [])
  if (!isSearch) prevY.current = scrollY
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }

  return (
    <ThemeProvider theme={{ isAlpha: isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              $isSearch={isSearch}
              searchBarClick={searchBarClickHandle}
            />
            <HeaderRight />
          </div>
          <SearchAreaPlaceholder $isSearch={isSearch} />
        </div>
        {isSearch && !isAlpha && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
