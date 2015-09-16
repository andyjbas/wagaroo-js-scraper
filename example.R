system('npm run scraper')

library(rvest)

full_page <- html("page.html")
bcrumbs = html_nodes(full_page, ".breadcrumb")
breed <- html_nodes(full_page, ".petbreed")
