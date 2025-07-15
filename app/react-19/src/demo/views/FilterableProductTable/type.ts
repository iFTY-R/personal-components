interface Product {
  category: string
  price: string
  stocked: boolean
  name: string
}

interface FilterableProductTableProps {
  products?: Product[]
}

interface ProductTableProps {
  products: Product[]
  filterText: string
  inStockOnly: boolean
}

interface SearchBarProps{
  filterText: string
  inStockOnly: boolean
  onFilterTextChange: (filterText: string) => void
  onInStockOnlyChange: (inStockOnly: boolean) => void
}
