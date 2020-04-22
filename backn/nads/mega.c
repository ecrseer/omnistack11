
#include<stdio.h>
#include <locale.h>
#include <string.h>

struct cadastroCliente
{
	char primeironome[60];
	
	int idade;
	float renda;
};

int main()
{
	
	struct cadastroCliente Cliente[19];
	int i;
	
	setlocale(LC_ALL,"");


//cliente 2 cadastro
for(i=0; i<=19; i++){
	printf ("Dê o nome do  Cliente\n");
	scanf("\n%[^\n]s",Cliente[i].primeironome);
	printf ("De a idade do  Cliente\n");
	scanf("%d",&Cliente[i].idade);
    printf ("De a renda do  Cliente\n");
	scanf("%f",&Cliente[i].renda);
	
}

printf (" O nome do Quarto Cliente é %s a idade do Decimo Cliente é %d  a renda do Decimo Sexto Cliente é %.10f",
Cliente[3].primeironome,Cliente[9].idade,Cliente[6].renda);	
}
