system("wagaroo-js-scraper --url=http://www.michiganhumane.org/adoption/dogs/ --name=foobar --wait-for=.petresult")

library(rvest)

full_page <- html("output/foobar.html")
bcrumbs <- html_nodes(full_page, ".breadcrumb")
breed <- html_nodes(full_page, ".petbreed")
