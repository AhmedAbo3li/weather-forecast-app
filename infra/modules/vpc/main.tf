data "aws_availability_zones" "available" {}

resource "aws_vpc" "weather_vpc" {
  cidr_block = var.vpc_cidr
}

resource "aws_subnet" "public_subnets" {
  count = 2  # Creating two subnets in different AZs

  vpc_id                  = aws_vpc.weather_vpc.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.weather_vpc.id
}
