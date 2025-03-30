module "vpc" {
  source   = "./modules/vpc"
  vpc_cidr = var.vpc_cidr
}

module "iam" {
  source    = "./modules/iam"
  role_name = "eks-cluster-role"
}


module "eks" {
  source       = "./modules/eks"
  cluster_name = "weather-cluster"
  eks_role_arn = module.iam.eks_role_arn
  subnet_ids   = module.vpc.public_subnet_ids
}
