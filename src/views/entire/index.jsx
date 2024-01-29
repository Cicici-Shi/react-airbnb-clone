import { fetchEntireDataAction } from '@/store/features/entire/actionCreators'
import { changeHeaderConfigAction } from '@/store/features/main'
import React, { memo, useEffect, Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import { EntireWrapper } from './style'
import EntireSkeleton from './c-cpns/entire-skeleton'
const EntireRooms = lazy(() => import('./c-cpns/entire-rooms'))

const Entire = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <Suspense fallback={<EntireSkeleton />}>
        <EntireRooms />
      </Suspense>
      <EntirePagination />
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
