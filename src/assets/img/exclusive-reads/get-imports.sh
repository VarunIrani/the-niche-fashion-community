pre=$1
dir=$2

cd $dir

j=0

while [ $j -lt `ls -d */ | wc -l` ]; do
	cd $j/
	i=0
	while [ $i -lt `ls *.txt | wc -l` ]; do
		echo import $pre\_$i from ../assets/text/exclusive-reads/$dir/$i.txt
		i=`expr $i + 1`
	done
	cd ../
	j=`expr $j + 1`
done

echo File Names

j=0

while [ $j -lt `ls -d */ | wc -l` ]; do
	cd $j/
	i=0
	while [ $i -lt `ls *.txt | wc -l` ]; do
		echo $pre\_$i,
		i=`expr $i + 1`
	done
	cd ../
	j=`expr $j + 1`
done

cd ..
