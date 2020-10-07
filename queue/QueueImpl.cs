using Grpc.Core;
using Queue;
using System.Threading.Tasks;

namespace queue
{
    public class QueueImpl : queueManager.queueManagerBase
    {
        public override Task<StudentPositionResponse> AddStudentToQueue(StudentQueueRequest request, ServerCallContext context)
        {
            return Task.FromResult(new StudentPositionResponse());
        }

        public override Task GetQueue(QueueAllRequest request, IServerStreamWriter<StudentPositionResponse> responseStream, ServerCallContext context)
        {
            return Task.FromResult(new StudentPositionResponse());
        }

        public override Task<StudentPositionResponse> GetStudentPosition(StudentQueueRequest request, ServerCallContext context)
        {
            return Task.FromResult(new StudentPositionResponse());
        }
    }
}
