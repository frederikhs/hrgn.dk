preview: build
	docker run -p 5173:80 hrgn-dk-preview

build:
	docker build -t hrgn-dk-preview .

clean:
	rm -rf \
		node_modules \
		build \
		dist \
		tmp
