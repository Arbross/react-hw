using Azure.Storage.Blobs;
using EventsAPI.Interfaces;

namespace EventsAPI.Services
{
    public class AzureStorageService : IFileStorageService
    {
        private readonly string connectionString;
        public AzureStorageService()
        {
            connectionString = "DefaultEndpointsProtocol=https;AccountName=eventsstorageimages;AccountKey=O5D2DtSE2Uk2OBU+wsVn5NsvorDYcD6R+gx1d7R1/LtEy9O1etpODGO+w6EX8qAW3cn0kosGg0eu+ASt0NZVSQ==;EndpointSuffix=core.windows.net";
        }
        public async Task DeleteFile(string containerName, string fileRoute)
        {
            var client = new BlobContainerClient(connectionString, containerName);

            if (!await client.ExistsAsync()) return;

            string fileName = Path.GetFileName(fileRoute);

            var blob = client.GetBlobClient(fileName);
            await blob.DeleteIfExistsAsync();
        }

        public async Task<string> EditFile(string containerName, string oldFileRoute, IFormFile newFile)
        {
            await DeleteFile(containerName, oldFileRoute);
            return await UploadFile(containerName, newFile);
        }

        public async Task<string> UploadFile(string containerName, IFormFile file)
        {
            var client = new BlobContainerClient(connectionString, containerName);
            await client.CreateIfNotExistsAsync();
            await client.SetAccessPolicyAsync(Azure.Storage.Blobs.Models.PublicAccessType.Blob);

            // custom file name

            var blob = client.GetBlobClient(file.FileName);
            await blob.UploadAsync(file.OpenReadStream());

            return blob.Uri.ToString();
        }
    }
}
