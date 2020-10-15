# a=0
# for i in *.jpg; do
# 	new=$(printf "%d.jpg" "$a")
# 	mv -i -- "$i" "$new"
# 	$(a = a + 1)
# done

for i in $(ls *.jpg); do
	n=$(basename $i .jpg)
	echo import home$n from ../assets/img/home/$n.jpg
done
