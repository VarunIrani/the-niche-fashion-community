for d in `ls -d */`; do
	a=0
	cd $d
	for i in *.jpg; do
		new=$(printf "%d.jpg" "$a")
		mv -i -- "$i" "$new"
		$((a=a+1))
	done
	cd ..
done
