import React from 'react'
import { Divider } from '@mui/material'
const MeasuerOwners = () => {
  return (
      <section className='bg-white dark:bg-[#434343] rounded-lg'>
          <div className="py-8 px-4 mx-auto max-w-6xl">
              <form action="#">
                  <h4 className='text-gray-900 dark:text-white text-lg mb-1uppercase'>Owners</h4>
                  <Divider className='col-span-3 border-b-gray-600 dark:border-b-gray-300' />
                  <div className="grid gap-4 mt-3">
                    <div className="text-gray-600 dark:text-gray-400">
                        Add Owners
                    </div>

                  </div>
              </form>
          </div>
      </section>
  )
}

export default MeasuerOwners