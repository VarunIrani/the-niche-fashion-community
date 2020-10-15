pre=$1

for j in $(ls -d */); do
	cd $j/
	i=0
	while [ $i -lt $(ls *.txt | wc -l) ]; do
		echo import $pre\_$i from ../assets/text/exclusive-reads/$j$i.txt
		i=$(expr $i + 1)
	done
	cd ../
done

echo File Names

for j in $(ls -d */); do
	cd $j/
	i=0
	while [ $i -lt $(ls *.txt | wc -l) ]; do
		echo $pre\_$i
		i=$(expr $i + 1)
	done
	cd ../
done
