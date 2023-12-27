import getBillboard from '@/actions/getBilboard'
import getProducts from '@/actions/getProducts'
import Billboard from '@/components/Billboard'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/Container'
import React from 'react'


export default async function Home() {

    const billboardName = await getBillboard("0ab24b13-2d62-4fce-8db9-ac1ac11c5be6")
    const products = await getProducts({isFeatured: true})
    return (
      <main className="p-4">
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboardName} />
            <div className="flex flex-col gap-y-6 px-6 sm:px-8 lg:px-10">
              <ProductList title="Featured Products" items={products } />
            </div>
            </div>

        </Container>
      </main>
    )
  }
  